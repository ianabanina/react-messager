import {IMessagesCollection, IMessagesCollectionData} from "entities/messages/Messages.models.ts";
import {FetchBaseQueryMeta} from "@reduxjs/toolkit/query";
import {IPaginationMeta} from "common/models/Response.models.ts";

export function mapMessagesCollectionData(data: IMessagesCollectionData, meta?: FetchBaseQueryMeta): IMessagesCollection {
    const links = meta?.response?.headers.get('Link');

    if (!meta || !links) {
        return {data};
    }

    const mappedLinks = getLinksFromHeaders(meta)
    const mappedMeta = mappedLinks ? mapMessagesCollectionMeta(mappedLinks) : undefined;

    if (mappedMeta) {
        return {data, meta: mappedMeta};
    }

    return {data};
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
        const a = regexKey?.exec(value);
        const b = regexUrl?.exec(value);
        if (!a || !b) {
            return;
        }

        const key = a[1];

        mapperLinks[key] = b[1];

    });

    return mapperLinks;
}

function mapMessagesCollectionMeta(links: { [key: string]: string }): IPaginationMeta | undefined {
    if (!links?.last) {
        return;
    }

    const searchParams = (new URL(links.last)).searchParams;
    const lastPage = searchParams.get('_page');
    const limit = searchParams.get('_limit');

    if (!limit || !lastPage) {
        return;
    }

    return {
        limit: +limit,
        lastPage: +lastPage,
        pageSize: +lastPage * +limit,
    };
}
