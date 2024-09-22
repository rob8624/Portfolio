import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase-production-1ec5.up.railway.app');

export const fetchHeaderData = async () => {
    const data = await pb.collection('Header_Details').getList();
    return data;
}

export default pb;


