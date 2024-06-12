export const fetchData = async () => {
  // const data = await fetch("/db.json")
  const data = await fetch('https://tommythemob.github.io/Hubex-test/db.json')
  const res = await data.json()

  return res
}