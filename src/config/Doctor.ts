const base_url = 'https://61a718ea8395690017be94dc.mockapi.io';
const doc_urls = {
  doctor: base_url + '/Doctor',
  doctorByName: (name: string) => base_url + `/Doctor?name=${name}`,
};
export default doc_urls;
