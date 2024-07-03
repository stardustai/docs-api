<script setup>
import { useData, withBase, useRouter } from 'vitepress'

const router = useRouter()
const { params } = useData()

router.go(withBase(`/${params.value.to ?? params.value.path}`))
</script>
