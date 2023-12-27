'use server'
export default async function postRequest(data: any) {

    console.log('data : ' + JSON.stringify(data));
    try {
        const apiUrl = 'http://website.waslafaq.net/api/request';

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        return await fetch(apiUrl, {
            method: 'POST',
            cache: 'no-store',
            headers: headers,
            body: JSON.stringify(data),
        }).then((response) => {
            return response.ok;
        });
    } catch (e: any) {
        console.log("Error in function " + e)
    }


}