const SAMPLE_RESPONSE = {
    "kind": "youtube#channelListResponse",
    "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/sjrZKgv2VwPsNsy4c_q3baEE6yg\"",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [
        {
            "kind": "youtube#channel",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/iw2hsya09J_NIKYdJeMvr2rHzl0\"",
            "id": "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
            "statistics": {
                "viewCount": "21364814526",
                "commentCount": "0",
                "subscriberCount": "95436034",
                "hiddenSubscriberCount": false,
                "videoCount": "3825"
            }
        }
    ]
}
export default {
    get: () => Promise.resolve({data: SAMPLE_RESPONSE})
}