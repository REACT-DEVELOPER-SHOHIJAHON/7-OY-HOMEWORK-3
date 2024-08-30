const useFetch = async (translations, sources, targets) => {
  const url = "https://deep-translate1.p.rapidapi.com/language/translate/v2";

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "216aaa2687msh91ec62caa74c1a8p1888b2jsnd4414ee7bbf9",
      "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: translations,
      source: sources,
      target: targets,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.data.translations.translatedText;
  } catch (error) {
    console.error(error);
    return "Error fetching translation";
  }
};

export default useFetch;
