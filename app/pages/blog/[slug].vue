<script setup>
const slug = useRoute().params.slug

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

if  (!post.value) {
 throw createError({ status: 404, message: 'Post not found' })
}
</script>

<template>
  <ContentRenderer :value="post" />

  <pre>{{post.body.toc}}</pre>
</template>
