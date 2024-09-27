import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.REACT_APP_POCKETBASE_URL); 
export const fetchHeaderData = async () => {
    const data = await pb.collection('Header_Details').getList();
    return data;
}

export const fetchHeroData = async () => {
    const data = await pb.collection('hero_details').getList();
    return data 
}

export default pb;


