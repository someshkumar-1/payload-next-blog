import Image from 'next/image'
import { ArticleMetadata } from '../_components/article-metadata'

const publishedAt = new Date('2026-06-01T00:00:00Z')

export default async function BlogPostPage() {
  return (
    <div className="prose lg:prose-lg dark:prose-invert">
      {/* title */}
      <h1>How to Create a Blog Turorial No One Asked For</h1>
      {/* metadata */}
      <ArticleMetadata
        intent="post"
        data={{
          author: {
            avatar: 'https://via.assets.so/img.jpg?w=40&h=40&bg=6b7280&f=png',
            name: 'John Doe',
            role: 'Author',
          },
          publishedAt,
          readTimeMins: 42,
        }}
        className="not-prose"
      />

      {/* cover image */}
      <Image
        src="https://via.assets.so/img.jpg?w=600&h=300&bg=6b7280&f=png"
        alt="Cover image"
        width={600}
        height={300}
        className="w-full rounded-md object-center object-cover"
      />

      {/* content */}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae sunt dolore aperiam
        dolorum unde consequuntur corporis reiciendis corrupti animi, quasi dolor explicabo, ab,
        molestiae voluptates ducimus mollitia beatae maxime facere architecto. Repellat
        harumcorrupti, debitis asperiores architecto possimus ut tempora veritatis libero veniam
        dolor recusandae porro nostrum hic rerum id doloribus pariatur cumque similique odit, quidem
        eos amet quasi voluptas? Explicabo libero quas similique perferendis id minima modi in, eum
        accusamus provident exercitationem optio reprehenderit, dignissimos error voluptas sunt quae
        enim quibusdam ipsam deserunt quia? Ab, animi debitis quidem rerum reprehenderit a.
        Obcaecati voluptatem a, repudiandae, quae cum aut quas dignissimos doloribus nemo debitis
        beatae rerum atque neque quos sit praesentium quisquam amet mollitia officia incidunt fugit
        iure pariatur quia. Et, ducimus ad quam velit nesciunt labore, itaque reiciendis commodi
        error, harum quaerat ab eligendi minima odit. Commodi maiores, dignissimos labore quis
        aliquid facilis tenetur excepturi. Dolorem maxime a porro voluptate. Repellat et pariatur,
        consectetur minima suscipit eius adipisci velit error reprehenderit facere quam facilis
        laboriosam fugit minus quo nemo. Asperiores quam ea eum sunt soluta corporis accusantium
        tempora aperiam! Modi unde, aut necessitatibus impedit eum minima laudantium quisquam
        laboriosam, accusamus provident, mollitia molestiae. Est odit, ipsum quam libero ipsa vel
        natus sapiente minus omnis similique itaque debitis voluptatum explicabo officia eaque
        molestias soluta. Dolore alias, in hic ea quas ex esse dolorum quod quis aspernatur velit
        earum obcaecati assumenda quia similique aliquam soluta, nam asperiores eos officia
        provident voluptas optio maxime. Consequatur alias voluptatibus, fuga ex reiciendis
        similique harum, deleniti nemo aliquid voluptates, eaque ullam obcaecati praesentium minus
        iste? Totam, fugit provident. Tempora nesciunt error similique, hic quaerat architecto
        deserunt quis, fugiat sit ratione adipisci, cum libero. Voluptate exercitationem earum
        facilis! Aperiam perspiciatis unde error ut. Esse temporibus omnis minus quis distinctio
        commodi! Ratione possimus obcaecati mollitia quia quasi saepe doloremque, tenetur, quo
        aperiam nostrum deleniti voluptatem quibusdam alias quos commodi provident in perspiciatis
        ducimus molestiae, dicta amet beatae ipsam dignissimos eaque. Impedit inventore dolorum
        quibusdam laboriosam suscipit vel aliquam eum sunt! Est molestiae eum et aliquam quod, cum
        id aperiam labore debitis odit quas vitae doloremque, officiis cumque? Temporibus ea unde
        modi impedit odit et eligendi placeat ducimus possimus, aliquam harum ipsa aliquid repellat
        rem, maiores fugiat doloremque nesciunt autem incidunt! Quae harum ex repellendus ab,
        expedita voluptate! Cupiditate explicabo praesentium reiciendis quidem deleniti veniam!
        Placeat minus explicabo eius illum pariatur. Hic, aspernatur amet! Iure fugit cupiditate
        earum, animi rerum quod dolores blanditiis quis ea placeat corporis consequatur veniam
        sapiente totam fuga. Fugit doloremque saepe sint sequi aspernatur! Adipisci quidem esse nemo
        eum excepturi dolor, rem deleniti similique enim iste aperiam provident vero minima. Quis
        possimus error molestias voluptatum ullam voluptas vitae molestiae earum praesentium facilis
        recusandae animi soluta, quia doloribus blanditiis nam nesciunt dolorem ut consequuntur
        porro perferendis. Dolores magni itaque nisi rerum inventore laboriosam cum sit dignissimos
        excepturi ad! Error maxime sequi numquam ducimus, libero nemo voluptates deserunt ipsam
        laborum quidem, et qui hic facilis autem ex voluptatibus officia iste! Aliquid facilis et
        pariatur assumenda dolores!
      </p>
    </div>
  )
}
