export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
