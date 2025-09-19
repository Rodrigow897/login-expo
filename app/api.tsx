const API_BASE_URL = 'http://:3000'; // Mude para o endereço da sua API, ip do pc

export const createNewUser = async (name: string, email: string, password: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        return { status: response.status, data };
    } catch (error) {
        console.error('Erro na requisição:', error);
        return { status: 500, data: { error: 'Erro de rede' } };
    }
};