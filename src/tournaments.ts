import type { Tournament } from './types.ts';

const tournaments: Tournament[] = [
  {
    title: 'Walt Disney Animation Studios films',
    description:
      '(Almost) every film released by Walt Disney Animation Studios. This does not include Pixar, Walt Disney Television Animation, etc.',
    players: [
      { name: 'Snow White and the Seven Dwarfs', score: 97, image: '' },
      {
        name: 'Pinocchio',
        score: 100,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/89a25bfa-acaa-4ad2-9337-486d67cccc6f/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Fantasia',
        score: 95,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/af5fa330-e60c-43d6-8048-feae3846e923/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'Dumbo', score: 95, image: '' },
      { name: 'Bambi', score: 91, image: '' },
      { name: 'Saludos Amigos', score: 82, image: '' },
      { name: 'The Three Caballeros', score: 85, image: '' },
      { name: 'Make Mine Music', score: 58, image: '' },
      { name: 'Fun and Fancy Free', score: 73, image: '' },
      { name: 'Melody Time', score: 69, image: '' },
      { name: 'The Adventures of Ichabod and Mr. Toad', score: 89, image: '' },
      {
        name: 'Cinderella',
        score: 95,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/66526336-ac3a-4514-97d4-217b24483407/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Alice in Wonderland',
        score: 82,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/94dfb3af-0853-45df-8476-ace81688c3d6/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Peter Pan',
        score: 79,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3ae8e2fb-1ce0-41c3-a4a1-a45e5da57647/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Lady and the Tramp',
        score: 91,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/659266c0-d0ca-413f-91ab-474732dc8f29/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Sleeping Beauty',
        score: 90,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e1abc2ef-1b3e-48b9-b862-ac1029d4b527/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'One Hundred and One Dalmatians',
        score: 98,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a13b92c7-39de-4151-95c6-12f67ca597c1/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Sword in the Stone', score: 65, image: '' },
      {
        name: 'The Jungle Book',
        score: 86,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fba71ef3-2aff-4020-b47c-ce25f8f07e9a/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Aristocats', score: 64, image: '' },
      {
        name: 'Robin Hood',
        score: 56,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2521-ac41-71dd-a264-da7d4386d605/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Many Adventures of Winnie the Pooh', score: 100, image: '' },
      {
        name: 'The Rescuers',
        score: 79,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/d82bf332-ad60-45e2-8928-fe6b6d438aab/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Fox and the Hound', score: 75, image: '' },
      { name: 'The Black Cauldron', score: 57, image: '' },
      {
        name: 'The Great Mouse Detective',
        score: 79,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b9d29e95-8dbb-4418-9fc1-039b109a2976/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Oliver & Company',
        score: 52,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/38812eff-c1f6-4d21-88e9-3275b6f19fae/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'The Little Mermaid',
        score: 92,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a6132121-27fc-498e-a2da-9430fb3f9ed8/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Rescuers Down Under', score: 85, image: '' },
      {
        name: 'Beauty and the Beast',
        score: 95,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/f2900f7d-ba6c-48bf-9ab4-a34218d3e6a1/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Aladdin',
        score: 96,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5dd89695-b48f-4a67-82d7-b54f42f5e92a/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'The Lion King',
        score: 92,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/55719263-0f1a-403c-8195-df5a94193313/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Pocahontas',
        score: 59,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/02791ee1-c91a-4a15-aa9f-b285e0962b17/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Hunchback of Notre Dame', score: 80, image: '' },
      {
        name: 'Hercules',
        score: 83,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/768046f1-bf56-4f31-bcbf-5b1d063187d6/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Mulan',
        score: 91,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b39a9-c0af-72f0-8f91-30ec6bd61f5b/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'Tarzan', score: 90, image: '' },
      { name: 'Fantasia 2000', score: 80, image: '' },
      {
        name: 'Dinosaur',
        score: 65,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/cec8ab38-9e87-40e9-8419-0c92a4c68b10/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: "The Emperor's New Groove",
        score: 86,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a7fc56d2-3afe-458a-a9c3-a8ea0e600572/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Atlantis: The Lost Empire',
        score: 48,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/0ff8b5b2-5622-4b8d-8db7-f1d8fbb215aa/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Lilo & Stitch',
        score: 86,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/1c1695f4-cd0c-4b5d-9f34-b8dc256b8e3d/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Treasure Planet',
        score: 68,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/780908f9-37ac-433e-8112-1f93bbf795fc/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Brother Bear',
        score: 38,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b251d-7cb8-7cb5-a4df-08e9ba6dc82a/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'Home on the Range', score: 51, image: '' },
      {
        name: 'Chicken Little',
        score: 36,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/df47979b-11f1-4107-8173-73ffe6daa843/compose?format=webp&label=standard_regular_prompt_178&width=800',
      },
      { name: 'Meet the Robinsons', score: 68, image: '' },
      {
        name: 'Bolt',
        score: 90,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019edadf-b7b3-74de-8fa3-0a06ca8206ae/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'The Princess and the Frog',
        score: 86,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b0f38c70-70f9-4f97-8aa4-6a316fbdcb6b/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Tangled',
        score: 89,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e466040f-2a12-46a1-9233-38b444b84269/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Winnie the Pooh',
        score: 90,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2f48-a626-7464-a14b-6fcca100dbc1/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Wreck-It Ralph',
        score: 87,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/1b641caa-f49f-4719-ba2a-e1e8e0b47b1d/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Frozen',
        score: 89,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/bc5f1b5e-737c-457d-ad7f-3e6562aad446/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Big Hero 6',
        score: 90,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019eb6f0-1df5-7ae6-9cdc-75bd8db552a2/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Zootopia',
        score: 98,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2eff-a3ec-75c0-b82f-ec2415a5b04e/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Moana',
        score: 95,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/c0eae5c5-5f8c-4bc9-9ae1-b7e8ec472c80/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Ralph Breaks the Internet',
        score: 88,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/96c01c2b-1593-4467-b004-8dc16b325515/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Frozen 2',
        score: 77,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2d93752a-cbd1-4251-95dc-eb5f65049514/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Raya and the Last Dragon',
        score: 93,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/44526b94-436c-46c3-b9dc-9844e861d763/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Encanto',
        score: 92,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6ca563ca-2076-440c-ac2e-4a6663cd4bfa/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Strange World',
        score: 72,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/08cda706-3d39-4ec6-9d0b-22833a3feffd/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Wish',
        score: 48,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/77fb2118-f4e5-46ce-9b7c-f42e59604b25/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Moana 2',
        score: 61,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7f06993f-bb7a-442a-be28-ea326642f07b/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Zootopia 2',
        score: 92,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019d1d25-3ddd-73f2-8f35-ebb74dbf86b1/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
    ],
  },
  {
    title: 'Chips',
    description: 'Brands and flavors of chips',
    players: [
      { name: 'Doritos Nacho Cheese', image: 'https://www.kroger.com/product/images/xlarge/front/0002840077059' },
      { name: 'Doritos Cool Ranch', image: 'https://www.kroger.com/product/images/xlarge/front/0002840077056' },
      {
        name: 'Doritos Spicy Nacho',
        image:
          'https://i5.walmartimages.com/seo/Doritos-Spicy-Nacho-Flavored-Tortilla-Chips-9-75-Oz_66573f19-7a7a-43c9-a2e1-3b76e1a4e37e_1.1f541dfa516cc8c4d2e5556837e7257e.jpeg',
      },
      {
        name: 'Doritos Spicy Sweet Chili',
        image: 'https://target.scene7.com/is/image/Target/GUEST_e635bcc4-3f35-4579-a7ae-463f28f0af96',
      },
      { name: 'Pringles', image: 'https://images.heb.com/is/image/HEBGrocery/002083687-1' },
      { name: 'Sour Cream & Onion Pringles', image: 'https://products.blains.com/600/122/1227955.jpg' },
      { name: 'Salt & Vinegar Pringles', image: 'https://pics.walgreens.com/prodimg/595140/900.jpg' },
      {
        name: 'Pizza Pringles',
        image: 'https://target.scene7.com/is/image/Target/GUEST_6cc81e30-ec67-414a-a422-18b9a75cae30',
      },
      {
        name: 'Extra Hot Chili Lime Pringles',
        image:
          'https://i5.walmartimages.com/seo/Pringles-Extra-Hot-5-57-Ounce-Pack-of-14_089977e6-4302-4df4-bbd3-42db915532d2.5bc1747bf5bccccb82ec9aaa1a6ac0fe.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      {
        name: 'Fritos The Original',
        image:
          'https://i5.walmartimages.com/asr/10d34172-a7dc-4339-9093-0622bf9c7a46.4db12b4bd8590213e9f3ed12291ca584.jpeg',
      },
      {
        name: 'Chili Cheese Fritos',
        image:
          'https://i5.walmartimages.com/seo/Fritos-Corn-Chips-Chili-Cheese-Flavored-Snack-Chips-9-25-Ounce-Bag_b598573f-184a-473a-83a0-0bfcfebb03b3.e5a76b7c69da9927f1bab750ec02002e.jpeg',
      },
      {
        name: 'Fritos Scoops',
        image: 'https://www.fritos.com/sites/fritos.com/files//2020-11/fritos%20scoops%20original.png',
      },
      {
        name: "Fritos Flamin' Hot",
        image: 'https://target.scene7.com/is/image/Target/GUEST_d9bee0ec-0231-4d0f-a794-a43d42d7d2c6',
      },
      {
        name: 'Fritos Flavor Twists Honey BBQ',
        image: 'https://www.fritos.com/sites/fritos.com/files//2020-11/Honey%20BBQ%20Twists_3.png',
      },
      {
        name: 'Takis Original',
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/6618c6943bdb96b59caef9992cc15edf/b4665c191b34baf3d0e0fa45dfdd3d1d.jpeg',
      },
      { name: 'Takis Fuego', image: 'https://i.ebayimg.com/images/g/n5cAAeSwvCVpcq-4/s-l400.jpg' },
      { name: "Classic Lay's", image: 'https://www.kroger.com/product/images/large/left/0002840009085' },
      {
        name: "Barbecue Lay's",
        image:
          'https://i5.walmartimages.com/seo/Lay-s-Barbecue-Flavored-Potato-Chips-7-77-Ounce-Bag_cf07a4f3-dd02-4b67-a10a-45da17791591.1daa113f1e3129bfd62dc808f93600f3.jpeg',
      },
      { name: "Sour Cream & Onion Lay's", image: 'https://www.kroger.com/product/images/xlarge/front/0002840042061' },
      {
        name: "Salt & Vinegar Lay's",
        image:
          'https://i5.walmartimages.com/seo/Lay-s-Potato-Chips-Salt-Vinegar-Flavored-2-5-oz-Bag_b12693f4-c59e-47be-9188-0d419bd49bb5.70690e7856158494324dc35c722ae220.jpeg',
      },
      { name: "Lay's Baked", image: 'https://www.kroger.com/product/images/xlarge/front/0002840033154' },
      { name: "Wavy Lay's", image: 'https://pics.walgreens.com/prodimg/623966/900.jpg' },
      {
        name: "Lay's Stax",
        image:
          'https://images.albertsons-media.com/is/image/ABS/960071224-C1N1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available',
      },
      {
        name: 'Tostitos',
        image:
          'https://i5.walmartimages.com/seo/Tostitos-Original-Tortilla-Chips-Snack-Chips-12-oz-Bag_31b048bb-5301-4b05-84f9-481ea4a9b54d.81f7210324deb3d8cbafd54c6086c3fc.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      {
        name: 'Tostitos Scoops',
        image:
          'https://www.snacks.com/_next/image?url=https%3A%2F%2Fdigitalassets.pepsico.com%2Fm%2F299e66f296d2697a%2FHi_Res-00028400064088_C1C1.jpg&w=3840&q=75',
      },
      { name: 'Tostitos Hint of Lime', image: 'https://pics.walgreens.com/prodimg/642068/900.jpg' },
      {
        name: 'Mission Tortilla Strips',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_EvVJgypJAiUiLqwNmeoN2bHBTY_YeWSnA&s',
      },
      {
        name: 'Cheetos Crunchy',
        image:
          'https://i5.walmartimages.com/seo/Cheetos-Crunchy-Cheese-Flavored-Snack-Chips-8-5-oz-Bag_9ecf4ee8-3337-4405-903e-3dddbf7b8c8f.52e185245be6c83d75ea64cfd9b71363.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      { name: "Cheetos Crunchy Flamin' Hot", image: 'https://m.media-amazon.com/images/I/51dLcB7bhRL.jpg' },
      {
        name: 'Cheetos Puffs',
        image: 'https://target.scene7.com/is/image/Target/GUEST_f38e0e8a-44c8-4917-94b5-0ac7ecc07177',
      },
      {
        name: "Cheetos Puffs Flamin' Hot",
        image:
          'https://i5.walmartimages.com/seo/Cheetos-Puffs-Flamin-Hot-Cheese-Flavored-Snacks-8-oz-Packaging-may-vary_b8662197-9e98-4c18-8d16-d8200427a025.da7153b44cd173d3c9cf83d77ed94cdc.jpeg',
      },
      {
        name: 'Cheetos Baked Crunchy Cheese',
        image: 'https://target.scene7.com/is/image/Target/GUEST_c8a3dc58-a668-4664-b931-cbf008514057',
      },
      {
        name: "Cheetos Baked Flamin' Hot",
        image: 'https://target.scene7.com/is/image/Target/GUEST_6bae63bd-4272-4fab-b3e9-1f8f64e774b3',
      },
      {
        name: "Chester's Fries Flamin' Hot",
        image:
          'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4ef94d0f-0509-4c48-888f-d030c0d98903.png',
      },
      {
        name: 'Ruffles Original',
        image:
          'https://i5.walmartimages.com/seo/Ruffles-Potato-Chips-Original-Snack-Chips-8-5-Ounce-Bag_f23bbb9b-d7b5-4854-af40-d0bdf8240b32.bd09d5c84f3a70b0a0a3dd64011fe654.jpeg',
      },
      {
        name: 'Ruffles Cheddar & Sour Cream',
        image: 'https://www.kroger.com/product/images/xlarge/front/0002840000291',
      },
      {
        name: 'Ruffles Sour Cream & Onion',
        image:
          'https://i5.walmartimages.com/seo/Ruffles-Sour-Cream-Onion-Flavored-Potato-Chips-8-5-Ounce_b10abf78-c2ca-4bba-b064-cd040b6baa81.3f6a244ccde6285d20b5594d16e54d44.jpeg',
      },
      {
        name: 'Ruffles All Dressed',
        image:
          'https://images.albertsons-media.com/is/image/ABS/970031884-C1N1?$ng-ecom-pdp-desktop$&defaultImage=Not_Available',
      },
      {
        name: 'Sun Chips Original',
        image: 'https://washington.bevmo.com/cdn/shop/products/1c033a0b-8e7d-4c8c-8945-38c2648fe6d4.png?v=1698877773',
      },
      {
        name: 'French Onion Sun Chips',
        image:
          'https://www.snacks.com/_next/image?url=https%3A%2F%2Fdigitalassets.pepsico.com%2Fm%2F1a8e6f1110905500%2FHi_Res-00028400152242_C1C1.jpg&w=3840&q=75',
      },
      {
        name: 'Harvest Cheddar Sun Chips',
        image:
          'https://target.scene7.com/is/image/Target/GUEST_4f4f9f68-a714-4a68-a977-c7797995b9c9?wid=300&hei=300&fmt=pjpeg',
      },
      {
        name: 'Garden Salsa Sun Chips',
        image: 'https://m.media-amazon.com/images/I/81W8lZY142L._AC_UF894,1000_QL80_.jpg',
      },
      { name: 'Funyuns', image: 'https://m.media-amazon.com/images/I/91D2DqydjIL.jpg' },
      { name: "Funyuns Flamin' Hot", image: 'https://www.kroger.com/product/images/large/front/0002840076821' },
      {
        name: 'Bugles',
        image:
          'https://storage.googleapis.com/ezimage-cache/noscale/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2NvbnRlbnQuZXphZHR2LmNvbS8yMDI0LzAzLzMxLzIwMjQwMzMxXzY2MDkxM2QzNjBmYjcuanBn.webp',
      },
      {
        name: 'Garden Veggie Straws',
        image: 'https://m.media-amazon.com/images/I/71ZSwO3bwRL._AC_UF894,1000_QL80_.jpg',
      },
      {
        name: 'Kettle Potato Chips Sea Salt',
        image: 'https://www.agatavalentina.com/Assets/ProductImages/84114009982-13.jpg',
      },
      {
        name: 'Kettle Potato Chips Jalapeño',
        image:
          'https://i5.walmartimages.com/seo/Kettle-Brand-Potato-Chips-Jalapeno-Kettle-Chips-5-oz_17fbad5c-b589-4a0c-a2c5-f1d5ff4098b4.4c3bb2a118c4856155d1ba613b26fa26.jpeg',
      },
      {
        name: 'Kettle Potato Chips Sea Salt & Vinegar',
        image:
          'https://images.albertsons-media.com/is/image/ABS/970384838-C1N1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available',
      },
      {
        name: 'Kettle Krinkle Cut Potato Chips Salt & Fresh Ground Pepper',
        image:
          'https://images.albertsons-media.com/is/image/ABS/970384839-C1N1?$ng-ecom-pdp-desktop$&defaultImage=Not_Available',
      },
      {
        name: 'Hawaiian Sweet Maui Onion Kettle Style Potato Chips',
        image: 'https://www.kroger.com/product/images/xlarge/front/0001159416006',
      },
      {
        name: 'PopCorners Sea Salt',
        image:
          'https://images.albertsons-media.com/is/image/ABS/960229450-C1N1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available',
      },
      {
        name: 'PopCorners White Cheddar',
        image:
          'https://images.albertsons-media.com/is/image/ABS/960225846-C1N1?$ng-ecom-pdp-desktop$&defaultImage=Not_Available',
      },
      {
        name: 'PopCorners Kettle Corn',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQK_qGigdgzQ5v4DhK52WdixKmQ3zj1e0PLg&s',
      },
      {
        name: "Stacy's Simply Naked Pita Chips",
        image: 'https://www.stacyssnacks.com/sites/stacys.com/files/2024-02/Stacy´s%20Simply%20Naked%202024.png',
      },
      {
        name: "Stacy's Parmesan Garlic & Herb Pita Chips",
        image: 'https://m.media-amazon.com/images/I/71KkSUqd4CL._AC_UF894,1000_QL80_.jpg',
      },
      { name: "Miss Vickie's Sea Salt", image: 'https://m.media-amazon.com/images/I/91EVL+eKaVL.jpg' },
      {
        name: "Miss Vickie's Jalapeño",
        image: 'https://target.scene7.com/is/image/Target/GUEST_89b4f723-ed32-48db-baf7-937ef8c6d3b1',
      },
      {
        name: "Miss Vickie's Spicy Dill Pickle",
        image:
          'https://cdn11.bigcommerce.com/s-iys49mn3fh/images/stencil/1280x1280/products/5186477/2099842/725750__53221.1721887841.jpg?c=1',
      },
      {
        name: 'popchips Sea Salt',
        image:
          'https://images.albertsons-media.com/is/image/ABS/960284617-C1N1?$ng-ecom-pdp-desktop$&defaultImage=Not_Available',
      },
      {
        name: 'popchips Barbeque',
        image:
          'https://i5.walmartimages.com/seo/Popchips-Potato-Snack-Chips-Barbeque-5-oz_cc9beab8-6f2a-4a0d-bcd0-245063087e87.e84570c3249fd7e95ecd64aa76a145e9.png',
      },
      {
        name: 'popchips Sour Cream & Onion',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/ppc/ppc50070/y/37.jpg',
      },
      { name: 'Terra Original', image: 'https://m.media-amazon.com/images/I/81XaBMmobhL._AC_UF894,1000_QL80_.jpg' },
      {
        name: 'Chili & Lime Flavored Rolled Tortilla Chips',
        image:
          'https://www.traderjoes.com/content/dam/trjo/products/m21001/61420.png/jcr:content/renditions/cq5dam.web.1280.1280',
      },
    ],
  },
  {
    title: 'Spells, Witchcraft and Wizardy',
    players: [
      { name: 'Accio' },
      { name: 'Aguamanti' },
      { name: 'Alohomora' },
      { name: 'Aparecium' },
      { name: 'Avada Kedavra' },
      { name: 'Avis' },
      { name: 'Bombarda' },
      { name: 'Brackium Emendo' },
      { name: 'Cantis' },
      { name: 'Cistum Aperio' },
      { name: 'Colloportus' },
      { name: 'Colovaria' },
      { name: 'Confringo' },
      { name: 'Confundo' },
      { name: 'Crucio' },
      { name: 'Densaugeo' },
      { name: 'Depulso' },
      { name: 'Descendo' },
      { name: 'Diffindo' },
      { name: 'Engorgio' },
      { name: 'Episkey' },
      { name: 'Evanesco' },
      { name: 'Expecto Patronum' },
      { name: 'Expelliarmus' },
      { name: 'Expulso' },
      { name: 'Ferula' },
      { name: 'Finite Incantatem' },
      { name: 'Furnunculus' },
      { name: 'Geminio' },
      { name: 'Immobulus' },
      { name: 'Impedimenta' },
      { name: 'Imperio' },
      { name: 'Impervius' },
      { name: 'Incendio' },
      { name: 'Langlock' },
      { name: 'Legilimens' },
      { name: 'Levicorpus' },
      { name: 'Locomotor' },
      { name: 'Lumos' },
      { name: 'Mimblewimble' },
      { name: 'Morsmordre' },
      { name: 'Muffliato' },
      { name: 'Nox' },
      { name: 'Obliviate' },
      { name: 'Obscuro' },
      { name: 'Oppugno' },
      { name: 'Petrificus Totalus' },
      { name: 'Portus' },
      { name: 'Prior Incantato' },
      { name: 'Protego' },
      { name: 'Reducto' },
      { name: 'Relashio' },
      { name: 'Rennervate' },
      { name: 'Reparo' },
      { naem: 'Rictusempra },
      { name: 'Scourgify' },
      { name: 'Sectumsempra' },
      { name: 'Silencio' },
      { name: 'Sluguluss Eructo' },
      { name: 'Specialis Revelio' },
      { name: 'Stupefy' },
      { name: 'Tergeo' },
      { name: 'Waddiwasi' },
      { name: 'Wingardium Leviosa' },
      
    ],
];

export default tournaments;
