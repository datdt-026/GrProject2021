const base_url = 'https://61a718ea8395690017be94dc.mockapi.io';
const urls = {
  patient: base_url + '/Patients',
  patientByName: (name: string) => base_url + `/Patients?name=${name}`,
};
export default urls;
