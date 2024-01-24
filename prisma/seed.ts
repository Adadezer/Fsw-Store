const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl:
          "https://www.dropbox.com/scl/fi/tw1fm06ryqcf6vcjpyfcq/catalogoMouse.png?rlkey=i3uxsowyef1xkmq51czdu1c7a&raw=1",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/t38wtb52850lktup8f04a/01_mx-master-3s.png?rlkey=5z5ttws3b0i89yi3z8ujfh2ab&raw=1",
          "https://www.dropbox.com/scl/fi/0ecn6unlt1j9kb1qay9t9/02_mx-master-3s.png?rlkey=kk40jqw9grsr26f8qzknbmzrm&raw=1",
          "https://www.dropbox.com/scl/fi/o7mhrt135l0xx45l0wpae/03_mx-master-3s.png?rlkey=qgov3nsztkltx8mm2gq4uf504&raw=1",
          "https://www.dropbox.com/scl/fi/ww778g9qylt3x1xyi27ek/04_mx-master-3s.png?rlkey=4ecvu99dkou83edvs9vdz2gl9&raw=1",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/al74dv2ekv1c8ewbmukw5/01_logi-superlight.png?rlkey=axipi8nvbfld29s4ss8wbkdxu&raw=1",
          "https://www.dropbox.com/scl/fi/gcytjvh0f1p7yszpyh5ik/02_logi-superlight.png?rlkey=nda658zqk6kwnbk6g2uzcmn85&raw=1",
          "https://www.dropbox.com/scl/fi/ryhdh3jbu4btg3885m9fs/03_logi-superlight.png?rlkey=jf2m10ro3usim1zmtlso6d8ix&raw=1",
          "https://www.dropbox.com/scl/fi/zar00uw7rahiqx8l2msfb/04_logi-superlight.png?rlkey=uqeuhj5eu16xofgs4hxjt973n&raw=1",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/m3pidyxjvyraqxhvclk0q/01_logi-lightspeed.png?rlkey=l1ju2ujc8bdc6910ip5i4iwat&raw=1",
          "https://www.dropbox.com/scl/fi/86lyg6u2p03qosig0110v/02_logi-lightspeed.png?rlkey=kxm5w9w42ar7qmz0958i6si9l&raw=1",
          "https://www.dropbox.com/scl/fi/7npfhgyq1coxe4mb7nt2a/03_logi-lightspeed.png?rlkey=daoq89w81wm1ftoeqsuydkl1b&raw=1",
          "https://www.dropbox.com/scl/fi/3nwrctia1ftqdf14tkkgs/04_logi-lightspeed.png?rlkey=hxrml963fz07urkewjnqexes4&raw=1",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/x3nppxpp4i3ja7vs9xtoe/01_hyperx-dart.png?rlkey=exy43he4kphhwwkdmt5zdovyv&raw=1",
          "https://www.dropbox.com/scl/fi/inthhdxbedwotwf72qem9/02_hyperx-dart.png?rlkey=0dcq84esupufh1mrjw4lkbkk3&raw=1",
          "https://www.dropbox.com/scl/fi/ilhs38875oawgprjyc3p1/03_hyperx-dart.png?rlkey=nrqw2n0vytnzbb8yw3ycf628q&raw=1",
          "https://www.dropbox.com/scl/fi/tjw9o9x8pq4m2kszs66rc/04_hyperx-dart.png?rlkey=uh8ue9kajkz2mgiadktk47zet&raw=1",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/51vo10k10a2g8r10z8758/01_razer-deathadder.png?rlkey=uurghz5dygu5hhiae2kchj0js&raw=1",
          "https://www.dropbox.com/scl/fi/sugmqqa897eitklstyovq/02_razer-deathadder.png?rlkey=xp56nfuz3bzpq4x8kkys71v9v&raw=1",
          "https://www.dropbox.com/scl/fi/o5rjn9qv0nv6rom152l39/03_razer-deathadder.png?rlkey=pzo78wbbf6ko4p7nd6g6akwy0&raw=1",
          "https://www.dropbox.com/scl/fi/lxy7bq69mknnbwgdi6zoq/04_razer-deathadder.png?rlkey=09to1uu71lla331gx9aadyb7a&raw=1",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl:
          "https://www.dropbox.com/scl/fi/gbtvm5s4ty9szlfhca2um/catologoTeclado.png?rlkey=gai1at2rzsqzhkr5chy8dl84q&raw=1",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.imgur.com/vmMdRSa.png",
          "https://i.imgur.com/9TA0obb.png",
          "https://i.imgur.com/q6CFl6h.png",
          "https://i.imgur.com/hzJiRiY.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/ekffj1td459thbulou82p/01_logi-mx-keys-s.png?rlkey=qgmxrfguwumx4rqcubpv0se70&raw=1",
          "https://www.dropbox.com/scl/fi/o5ecbw6ncu7y1vfndm53r/02_logi-mx-keys-s.png?rlkey=0hhq3cfwdz960cl3trup5mssk&raw=1",
          "https://www.dropbox.com/scl/fi/k7lp8tdcrzrbvn332k7x4/03_logi-mx-keys-s.png?rlkey=8nqnuy3kfa7l9jcpel95zmxcj&raw=1",
          "https://www.dropbox.com/scl/fi/f2jn56p9wu7kw3ri7n6rg/04_logi-mx-keys-s.png?rlkey=csaanq3abz3avwoq7h97s4m1d&raw=1",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/x6o11u0wdz4pc48zi72xt/01_logi-pop-keys.png?rlkey=ekviyxbghl6blknypmpt9oi75&raw=1",
          "https://www.dropbox.com/scl/fi/w16qxkrm8h0n6y3zlon6p/02_logi-pop-keys.png?rlkey=cmko42gf0do64v5typcvpgve8&raw=1",
          "https://www.dropbox.com/scl/fi/s5rxy86wlco0pyh66sljz/03_logi-pop-keys.png?rlkey=vyiem2171dri5v2equcjzve0i&raw=1",
          "https://www.dropbox.com/scl/fi/0pdcdwm79mkmjyx21cviy/04_logi-pop-keys.png?rlkey=96mn9dm84f5nmflqszkgnvhtd&raw=1",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/zmtr6igo0j28tg8oitciw/01_logi-mx-mechanical.png?rlkey=1sy8x8k38owcx9njs8w69xydw&raw=1",
          "https://www.dropbox.com/scl/fi/vncbbah2jf6rajlvns4h5/02_logi-mx-mechanical.png?rlkey=jnvevg1yy94j5e8bh2z0c38bx&raw=1",
          "https://www.dropbox.com/scl/fi/merv1nfm3d0dqewzhwzwr/03_logi-mx-mechanical.png?rlkey=f29f5ycs4nmrvucbcnjmtj5gk&raw=1",
          "https://www.dropbox.com/scl/fi/xki4glvv3lfquv694j0qo/04_logi-mx-mechanical.png?rlkey=rx4n53jghrvaq6bcc8tlmzobh&raw=1",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/m7ix2g2a2xb5dmbigz1kj/01_epomaker-th80.png?rlkey=8d4yjqig52ykmn3srgn7eono1&raw=1",
          "https://www.dropbox.com/scl/fi/ve92f1zctzyem9zrll9el/02_epomaker-th80.png?rlkey=4a6v7bsxba9t15fmizj1jmi4z&raw=1",
          "https://www.dropbox.com/scl/fi/gmae1tkm1le8ldlegrm4h/03_epomaker-th80.png?rlkey=wgw7bvoo9qfqeuodczayzycpz&raw=1",
          "https://www.dropbox.com/scl/fi/9hwe2sbgh2tx53hkbdyvf/04_epomaker-th80.png?rlkey=mbmaz39d1bxu09wblymzq2p3e&raw=1",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/kd7wqn00v7fww1wri0fta/01_redragon-gamer-ashe.png?rlkey=pimjn1nnujv2pey310rnoqexv&raw=1",
          "https://www.dropbox.com/scl/fi/1obo53k4hemh2st6vuf4l/02_redragon-gamer-ashe.png?rlkey=7cr6z5sq10tfvk0b55gfgfuri&raw=1",
          "https://www.dropbox.com/scl/fi/79xc72brxfdainpo9nup5/03_redragon-gamer-ashe.png?rlkey=vixv3tb34uempvq188r6v1wmr&raw=1",
          "https://www.dropbox.com/scl/fi/67hrcqj5c5g9bhccqptkh/04_redragon-gamer-ashe.png?rlkey=m7827i2fslbciwvyd46qq5yk1&raw=1",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl:
          "https://www.dropbox.com/scl/fi/pvt9j6xqyryzqsc4vpanp/catalogoFone.png?rlkey=xsibwret0t67rmhcontm94dsv&raw=1",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/l51dn880j6jpzis7oziee/01_logi-vibe.png?rlkey=66ttcv2dckxil29r57tkahb93&raw=1",
          "https://www.dropbox.com/scl/fi/4z3bincz9gpnhapy50p17/02_logi-vibe.png?rlkey=tdkdnxjk718rqx9kthzssp8bt&raw=1",
          "https://www.dropbox.com/scl/fi/2g1gzj26v3u2y3nbwv4vs/03_logi-vibe.png?rlkey=ggey7oqlrqigtneszh22xvq1h&raw=1",
          "https://www.dropbox.com/scl/fi/2fkiiiqn3t7uqiiz7uhte/04_logi-vibe.png?rlkey=o7gnohecymr52doqh7rhf0szf&raw=1",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/xakf1vzdhv1kmm8rygtxn/01_logi-lightspeed-phone.png?rlkey=m7tatjywb4ciyljsh9sfge462&raw=1",
          "https://www.dropbox.com/scl/fi/truzii2bstjn489ktli0i/02_logi-lightspeed-phone.png?rlkey=h62g86pi1srcij9755j2p8fa5&raw=1",
          "https://www.dropbox.com/scl/fi/dtydv8bx12a1yhxbjped4/03_logi-lightspeed-phone.png?rlkey=s8arebm9ph7ndglja94u56scl&raw=1",
          "https://www.dropbox.com/scl/fi/ho0uzzk5f6ki8nos6i8oh/04_logi-lightspeed-phone.png?rlkey=w1yvnznt547oiru0d1ufa9jwm&raw=1",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/far6mea6k8uh6u5ki5qhc/01_logi-astro-a30.png?rlkey=ty68akh6ce8evezzrfqp2azl5&raw=1",
          "https://www.dropbox.com/scl/fi/pt7juxjixzuttg006onca/02_logi-astro-a30.png?rlkey=3k6f0h20dn313cja7h10as96e&raw=1",
          "https://www.dropbox.com/scl/fi/wp9jgpviqp9dos4r1wuyk/03_logi-astro-a30.png?rlkey=ymcqwa5828qzqu9pt8fkutm0n&raw=1",
          "https://www.dropbox.com/scl/fi/v7sk07k2yy09l3yh6fqyb/04_logi-astro-a30.png?rlkey=1ss1nw4worvk4nemai9qth59q&raw=1",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/bxejpjbd1d38gyh8huuct/01_logi-earbuds.png?rlkey=4h9uuevegwvaa5oz04fv7lv92&raw=1",
          "https://www.dropbox.com/scl/fi/fpubtjaccii2ia6wuy61u/02_logi-earbuds.png?rlkey=cmn2bz4muiol7rxa6mvjd5xdd&raw=1",
          "https://www.dropbox.com/scl/fi/h7ft4rxupue7a8v2ozr38/03_logi-earbuds.png?rlkey=rfygau6oss7nnrv025uxky3w6&raw=1",
          "https://www.dropbox.com/scl/fi/1bm3188ddzjompskky0ib/04_logi-earbuds.png?rlkey=lvd7l1wz9mhrl6f1sbu7dfso2&raw=1",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/5j9s4kl61jgltkqsj4qjl/01_hyperx-stinger.png?rlkey=rin9rstos64n681hqjp0pks3s&raw=1",
          "https://www.dropbox.com/scl/fi/qxpeafkf12y0pi6z2h83d/02_hyperx-stinger.png?rlkey=tlzu56r55x780ap948g7xpyg0&raw=1",
          "https://www.dropbox.com/scl/fi/0mctowrhzkxcw7th02upf/03_hyperx-stinger.png?rlkey=q89gn1fc90e1y2lcgun3b5sbn&raw=1",
          "https://www.dropbox.com/scl/fi/8mzftom5hmx8h1bbq6cwy/04_hyperx-stinger.png?rlkey=eygllfhnld970vqmei3lwoc8c&raw=1",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/bpxbbg17cc4ix9dt50ne1/01_razer-kraken.png?rlkey=ri8bz1lhdc5eefxfhwqkb3s3n&raw=1",
          "https://www.dropbox.com/scl/fi/ssof4kb5rflfcv0ijujzf/02_razer-kraken.png?rlkey=8pxayk9spw3jtexi9jhlzpfyo&raw=1",
          "https://www.dropbox.com/scl/fi/1uex86ujk9fekv0tl6q88/03_razer-kraken.png?rlkey=osg77045crmmf2da0ohpiiuc8&raw=1",
          "https://www.dropbox.com/scl/fi/f28l2wnwanaxarl8jzosu/04_razer-kraken.png?rlkey=fjl8b3wb3n4gyusd2xrvoligc&raw=1",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl:
          "https://www.dropbox.com/scl/fi/dct6mrjp8x30bhqxij2g6/catalogoMousepad.png?rlkey=w2ok7gzp5uyywdae613jm6pkg&raw=1",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/ot752lz024t2yuwyf8y5q/01_logi-powerplay.png?rlkey=53sa3t817ko1s4087gqegf2vu&raw=1",
          "https://www.dropbox.com/scl/fi/ghyqpni69z183dy92jd1b/02_logi-powerplay.png?rlkey=cyiaesijsrntl1d7qbojklco0&raw=1",
          "https://www.dropbox.com/scl/fi/7js2g3cfbg8sjk8lqji10/03_logi-powerplay.png?rlkey=cn9vsq5vdaco1xhdddc1mpxwg&raw=1",
          "https://www.dropbox.com/scl/fi/ijfjxctd9jqkjkdmu7e27/04_logi-powerplay.png?rlkey=j2ksln05mflufko3v9i3lru8t&raw=1",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/hte8v99d2acehgs2mbxdn/01_logi-desk-mat.png?rlkey=lolhnune1nqjel00cfvdaw0wm&raw=1",
          "https://www.dropbox.com/scl/fi/bpfwatjbgz6yqd87f0dx6/02_logi-desk-mat.png?rlkey=vo4vq0doejdj04mrbxf5zlh79&raw=1",
          "https://www.dropbox.com/scl/fi/cakcmolsv80hv7l248b4z/03_logi-desk-mat.png?rlkey=kqftj8h481c5vjlyqrq2r5y16&raw=1",
          "https://www.dropbox.com/scl/fi/loi364f5pjb07hg2nv8vo/04_logi-desk-mat.png?rlkey=v6ul3bgyqq7apg0njeq7betev&raw=1",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/f5rraz9fet7p4qxk2dwb2/01_logi-g740.png?rlkey=rvx49s9vdmwh1y15mu2r61pek&raw=1",
          "https://www.dropbox.com/scl/fi/oci1z18pj0lgyhft61d8g/02_logi-g740.png?rlkey=9hod5dgbmy2cjcci7rpbw0q7w&raw=1",
          "https://www.dropbox.com/scl/fi/pa99djr44ikqpoddqo4vv/03_logi-g740.png?rlkey=8us1pv2dkug7z4zty1ndc6og8&raw=1",
          "https://www.dropbox.com/scl/fi/28oi6c3y6l2jw09rp3g52/04_logi-g740.png?rlkey=n41rqnbj8182b386xsy1cp8ud&raw=1",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/dhpun9awajhpl45waj0fn/01_logi-studio-series.png?rlkey=9dm95sikpy5akgz9hh578kcw7&raw=1",
          "https://www.dropbox.com/scl/fi/gffobk2w4mwnejn0uzqg8/02_logi-studio-series.png?rlkey=t7t36dyb30hg4457mai791wg0&raw=1",
          "https://www.dropbox.com/scl/fi/74vcqbuihwx01drjgjelj/03_logi-studio-series.png?rlkey=pk5q8vdkx4v9j7wiuyt0djiel&raw=1",
          "https://www.dropbox.com/scl/fi/4lv83nzawqb882pcxlatx/04_logi-studio-series.png?rlkey=j8bq94pbn7yu95r93b4cxhhvb&raw=1",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/bt0mura82ijp8m7ezvpdb/01_force-dark.png?rlkey=kduql2itt65nvq0xf5lthxboy&raw=1",
          "https://www.dropbox.com/scl/fi/cnl0u03cem69nxooywz8i/02_force-dark.png?rlkey=q5ysdzvymm5yo6pkc1yijvypq&raw=1",
          "https://www.dropbox.com/scl/fi/5rbj88h1et03r4ovu4yxx/03_force-dark.png?rlkey=opeotcwobxdhfpr5z5j7c6wr8&raw=1",
          "https://www.dropbox.com/scl/fi/on6rkgsemxo9dlqx36uw5/04_force-dark.png?rlkey=kgi698ejjf4jljqd6eglzn3im&raw=1",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/duels3bnyp1l54bogkvh9/01_force-snow.png?rlkey=zng3zqhskecfvmemw9jgn86xa&raw=1",
          "https://www.dropbox.com/scl/fi/mqhyx33slg327s25p3bzg/02_force-snow.png?rlkey=mslwstco34jidufaj3tw39vna&raw=1",
          "https://www.dropbox.com/scl/fi/znrdvix0dhbogd5jiqmts/03_force-snow.png?rlkey=xr2mxzlyxdeqblxa1iayioxyt&raw=1",
          "https://www.dropbox.com/scl/fi/hfggr48jbos83dkcftj4b/04_force-snow.png?rlkey=sdshzguj3s891e1f8pe4bsoas&raw=1",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl:
          "https://www.dropbox.com/scl/fi/ssg8bajpjp38jmg22eu7j/catalogoMonitores.png?rlkey=8cbxhh139u5up5art5ir4d02h&raw=1",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/5t8x5nlfk6fwyx6ufcwqp/01_dell-S2421HN.png?rlkey=kn3az61vbs24h0kgmdd3n71u5&raw=1",
          "https://www.dropbox.com/scl/fi/fx6rqutsnqigraqn45nq4/02_dell-S2421HN.png?rlkey=bnofrmwrma28rldy1a3hoiaii&raw=1",
          "https://www.dropbox.com/scl/fi/j1izqa1y5xe58wf6cr1tv/03_dell-S2421HN.png?rlkey=ntdf6keaaslcpfpaiod3v736i&raw=1",
          "https://www.dropbox.com/scl/fi/czss2m6u8lsffx5a26tim/04_dell-S2421HN.png?rlkey=ci8t7xi2e9s5y5imcuwwn057m&raw=1",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/xxfnv23rptt3b49a46irw/01_dell-P2422H.png?rlkey=ye5k4ry0hy46i96w19l4kqonq&raw=1",
          "https://www.dropbox.com/scl/fi/vyvl2s9k8qkolqekji7q8/02_dell-P2422H.png?rlkey=xkh28xyqn65bau2woebjbpsmt&raw=1",
          "https://www.dropbox.com/scl/fi/8l2gkt4iwlccmo312nvwc/03_dell-P2422H.png?rlkey=p98anvftkpvw1v1irpunnchu3&raw=1",
          "https://www.dropbox.com/scl/fi/o3uwkcid6zc4mn99q2q3v/04_dell-P2422H.png?rlkey=4kfhd8ap1jdg46bm4xxsubfa0&raw=1",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/ovnlwpmdz9hhbuvtdjgac/01_dell-P2723QE.png?rlkey=g0gk0kig8gtz6ecaaz4zvtgnz&raw=1",
          "https://www.dropbox.com/scl/fi/b4bgz9qnl4cyd67bo9jz1/02_dell-P2723QE.png?rlkey=blbr7pdhl4g0dh4dtnuyecag4&raw=1",
          "https://www.dropbox.com/scl/fi/sb4vz43m70snmsiev1le2/03_dell-P2723QE.png?rlkey=noklbc03amah9c7lkazssd8ca&raw=1",
          "https://www.dropbox.com/scl/fi/yq2jbtovjmc5mvyzupf3q/04_dell-P2723QE.png?rlkey=d1b9mb9pzblt8r25tkisr255c&raw=1",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/b8w9p8js9gu2c5glkn6sr/01_dell-S3422DWG.png?rlkey=ai518ngl2cdhk3devsdy7igqf&raw=1",
          "https://www.dropbox.com/scl/fi/bmjd5rz24hcf5kb1lkn43/02_dell-S3422DWG.png?rlkey=c8ulvukp538ldfux4bfyanzvz&raw=1",
          "https://www.dropbox.com/scl/fi/35q3jacuhw52tmvz5i31k/03_dell-S3422DWG.png?rlkey=2x2y459r8easnrmaeexypki18&raw=1",
          "https://www.dropbox.com/scl/fi/s3u5rqu3y4re6ef35btpo/04_dell-S3422DWG.png?rlkey=8gay1sjz1jiz3zjqt8wnsys99&raw=1",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/4adq59n2au82xkm9xndjv/01_dell-S3222DGM.png?rlkey=aghl8cxad79kb6in71w9jhnlk&raw=1",
          "https://www.dropbox.com/scl/fi/vytx7kklyo896jd2hg47w/02_dell-S3222DGM.png?rlkey=rt90h2to533r3d7upfu32e8mw&raw=1",
          "https://www.dropbox.com/scl/fi/dteu2oeckg3suttoskp4j/03_dell-S3222DGM.png?rlkey=sbrdidl3p9wqv4r4cw4xj7c8j&raw=1",
          "https://www.dropbox.com/scl/fi/l7d7bns77t9gqlkcm7eua/04_dell-S3222DGM.png?rlkey=ur6tbqhimxbhkue24rb3sscoo&raw=1",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://www.dropbox.com/scl/fi/1olu79hlnmv8atvwj981e/01_dell-AW2524HF.png?rlkey=q35d3taa5q6wtfiwed9tdqqzq&raw=1",
          "https://www.dropbox.com/scl/fi/02it9bz8311gzaoxgij2e/02_dell-AW2524HF.png?rlkey=j1vp17l0cbt4u7bzvj80vn96v&raw=1",
          "https://www.dropbox.com/scl/fi/7gvpuwg3dugwm5vprlv6g/03_dell-AW2524HF.png?rlkey=4nmwapoycm4ywr6oz0mfijh4l&raw=1",
          "https://www.dropbox.com/scl/fi/ckmgvquhdo6dgpnztubpb/04_dell-AW2524HF.png?rlkey=cmqi1yl6rmeg8bw3is5eodhem&raw=1",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-dock.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-XB23.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-S200F.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
