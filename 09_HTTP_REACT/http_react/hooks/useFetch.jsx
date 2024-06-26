import { useState, useEffect } from 'react';

// 4 Custom hook

export const useFetch = (url) => {

    const [data, setData] = useState(null);

    // 5 - Refatorando POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - loading
    const [loading, setLoading] = useState(false);

    // 7 - tratando erros
    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {

        if (method === "POST") {
            setConfig({
                method,
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });

            setMethod(method);
        };

    };

    useEffect(() => {

        const fetchData = async () => {
            
            // 6 - loagind/start
            setLoading(true);

            // 7 - tratando erros
            try {
                const res = await fetch(url);
                const json = await res.json();

                setData(json);
            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados");
            }

            // 6 - loagind/finish
            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    // 5 - Refatorando POST

    useEffect(() => {
        
        const httpRequest = async() => {
            let json;

            if (method === "POST") {
                // 6 - loagind/start
                setLoading(true);

                let fetchOptions = [url, config];
                
                const res = await fetch(...fetchOptions);

                json = await res.json();

                // 6 - loagind/finish
                setLoading(false);
            };

            setCallFetch(json);
        };

        httpRequest();

    }, [config, method, url]);

    return {data, httpConfig, loading, error};

};