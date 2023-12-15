import {
    IMessagesCollection,
    IMessagesCollectionData,
    TGetMessagesParams,
    TGetMessagesParamsData
} from "entities/messages/Messages.models.ts";
import {FetchBaseQueryMeta} from "@reduxjs/toolkit/query";
import {IPagination} from "common/models/Response.models.ts";
import {messagesSortParamsDefault} from "entities/messages/Messages.consts.ts";

export function mapMessagesCollection(data: IMessagesCollectionData, meta?: FetchBaseQueryMeta, params?: TGetMessagesParams): IMessagesCollection {
    const links = meta?.response?.headers.get('Link');

    if (!meta || !links) {
        return {data};
    }

    const mappedLinks = getLinksFromHeaders(meta)
    const mappedMeta = mappedLinks ? mapMessagesCollectionMeta(mappedLinks, params) : undefined;

    if (!mappedMeta) {
        return {data};
    }

    return {data, meta: mappedMeta};
}

function getLinksFromHeaders(meta: FetchBaseQueryMeta): { [key: string]: string } | undefined {
    const links = meta?.response?.headers.get('Link');

    if (!links) {
        return undefined;
    }

    const regexKey = /rel="([^"]+)"/;
    const regexUrl = /<([^>]+)>/;

    const mapperLinks: { [key: string]: string } = {};

    links.split(', ').forEach(value => {
        const keyData = regexKey?.exec(value);
        const urlData = regexUrl?.exec(value);

        if (!keyData || !urlData) {
            return;
        }

        const key = keyData[1];

        mapperLinks[key] = urlData[1];
    });

    return mapperLinks;
}

function mapMessagesCollectionMeta(links: {
    [key: string]: string
}, params: TGetMessagesParams): IPagination | undefined {
    if (!links?.last) {
        return;
    }

    const searchParams = (new URL(links.last)).searchParams;
    const lastPage = searchParams.get('_page');
    const limit = searchParams.get('_limit');

    if (!limit || !lastPage) {
        return;
    }

    const page = params && params['_page'] || 1;

    return {
        limit: +limit,
        lastPage: +lastPage,
        pageSize: +lastPage * +limit,
        page
    };
}

export function mapMessagesCollectionParams(params: TGetMessagesParams): TGetMessagesParamsData {
    function getMappedParams(): TGetMessagesParamsData {
        if (!params) {
            return {}
        }

        let mappedParams: TGetMessagesParamsData = {}

        if ("authorId" in params) {
            const {authorId, ...rest} = params;

            mappedParams = {...rest, "author.id": authorId}
        }

        return mappedParams;
    }


    return {...messagesSortParamsDefault, ...getMappedParams()}
}
