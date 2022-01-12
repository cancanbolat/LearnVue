import { ref } from 'vue';
import { db } from '../firebase/config'
import moment from 'moment'

const makaleDetay = (id) => {
    const makale = ref(null)
    const hatalar = ref(null)

    const makaleYukle = async () => {
        try {
            let res = await db.collection('makaleler').doc(id).get();

            if (!res.exists) {
                throw new Error('Makale not found')
            }

            const tarih = res.data().olusturulmaTarihi.toDate();
            const formatliTarih = moment(tarih).locale('tr').format('LLL');

            makale.value = { ...res.data(), id: res.id, olusturulmaTarihi: formatliTarih }
        } catch (error) {
            hatalar.value = error.message
        }
    }

    return { makale, hatalar, makaleYukle }
}

export default makaleDetay;