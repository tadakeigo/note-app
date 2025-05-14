import type { Note } from "@/app/notes/type";
import { createClient, MicroCMSQueries } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

// ノート一覧を取得
export const getNotesList = async () => {
    const noteLists = await client.getList<Note>({
        endpoint: "notes",
    })

    return noteLists;
}

// ノート詳細を取得
export const getDetailNote = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailNote = await client.getListDetail<Note>({
        endpoint: "notes",
        contentId,
        queries,
    })

    return detailNote;
}
