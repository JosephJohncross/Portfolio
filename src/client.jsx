import  { createClient } from "@sanity/client";

const createSanity = createClient({
    projectId: "60ezqqkb",
    dataset: "production",
    useCdn: true,
    apiVersion: '2023-05-09',
});

export default createSanity;
