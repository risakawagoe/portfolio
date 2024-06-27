export async function saveProfile(profile: any): Promise<{ success: boolean }> {
    if(process.env.REACT_APP_PORTFOLIO_DB_SERVICE_ENDPOINT === undefined) {
        return { success: false };
    }

    try {
        const response = await fetch(`${process.env.REACT_APP_PORTFOLIO_DB_SERVICE_ENDPOINT}/api/profile`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ profile: profile }),
        });
        if(response.ok) {
            const result = await response.json();
            if(result.success) {
                return { success: true };
            }
        }
    }catch(error) {
        console.error(error);
    }
    return { success: false };
}

export async function getProfile(): Promise<{ success: boolean, data: any }> {
    if(process.env.REACT_APP_PORTFOLIO_DB_SERVICE_ENDPOINT === undefined) {
        return { success: false, data: null };
    }

    try {
        const response = await fetch(`${process.env.REACT_APP_PORTFOLIO_DB_SERVICE_ENDPOINT}/api/profile`, {
            method: "GET",
            mode: "cors"
        });

        if(response.ok) {
            const result = await response.json();
            return { success: result.success, data: result.data }; 
        }
    }catch(error) {
        console.log(error);
    }
    return { success: false, data: null };
}