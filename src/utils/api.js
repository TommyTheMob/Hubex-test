export const fetchData = async () => {
  const data = await fetch("/db.json")
  const res = await data.json()

  return res
}