import { useState, useEffect } from "react";
import Header from "componenets/Header/Header";

import "./App.css";

function App() {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isNavigationMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavigationMenuOpen]);

  const handleToggleNavigationMenu = () => {
    setIsNavigationMenuOpen(!isNavigationMenuOpen);
  };

  return (
    <div
      className={`app ${isNavigationMenuOpen ? "navigation-menu--open" : ""}`}
    >
      <Header handleToggleNavigationMenu={handleToggleNavigationMenu} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere
        rerum voluptatibus nihil, delectus nostrum earum, deserunt nobis animi
        eligendi temporibus repellat, qui accusamus obcaecati! In cum iste
        architecto veritatis dolorum itaque iusto deleniti debitis velit saepe.
        Rerum iusto sint repudiandae, soluta quibusdam quo voluptates architecto
        aliquid expedita cum ex quaerat distinctio incidunt excepturi laudantium
        consequatur veniam repellendus maiores quia, rem fugit ab officia
        voluptatem. Cumque architecto dolor in fuga inventore, laboriosam
        repudiandae aspernatur distinctio quisquam similique dolorum nobis animi
        ex est nostrum omnis, eos corporis? Vel aperiam quaerat porro quae ex
        consectetur necessitatibus harum! Explicabo perspiciatis libero impedit
        officia perferendis assumenda voluptate, quo nesciunt dolore, reiciendis
        magni quas nemo tempora minus ad nulla, nobis modi autem quod nisi? At
        vel fugiat iste suscipit ducimus animi, minus provident laudantium
        reprehenderit quidem veniam nobis, tempore ut, reiciendis voluptatem
        porro odio eveniet ex qui officiis! Aliquid voluptatum expedita enim
        deserunt. Deleniti laborum ad maiores veniam, commodi ea? Aliquid neque
        dolorum maxime ea repellendus autem! Suscipit labore harum dicta quia.
        Facilis soluta fuga nostrum, nesciunt corporis, assumenda iusto sit
        laboriosam alias dolor mollitia deleniti vero optio minus rerum hic,
        laudantium doloremque perspiciatis officiis magnam. Nihil maxime
        laboriosam voluptatum unde, quibusdam voluptatem, eaque error quae illo
        ad obcaecati numquam autem corrupti alias eum. Placeat id est a rerum.
        Repudiandae nihil molestiae perferendis id eos amet, harum voluptatum!
        Beatae provident ut facilis, omnis temporibus iure a sed sunt voluptas
        incidunt, maiores similique repellat minus autem sequi? Ipsam aut sint
        repudiandae vitae delectus esse autem ratione, maxime rem aperiam et
        suscipit vel obcaecati illo animi iste perferendis odit eum. Natus qui
        quidem quasi corporis? Architecto exercitationem, accusamus totam, natus
        id quaerat modi dignissimos quia, dolores ipsam saepe voluptates sequi
        ut nemo voluptate veniam adipisci fuga dolore minima repellendus. Dolor
        iste fugiat id adipisci quo fugit placeat numquam quisquam perferendis,
        ducimus natus! Asperiores pariatur cum voluptatum voluptatem minus
        suscipit labore nisi corporis ullam vel officiis recusandae laboriosam
        perferendis vitae obcaecati corrupti consequuntur ipsam cupiditate
        placeat deleniti fugit, rem ipsa dolorem. Modi repellat molestias quia
        repellendus. Maxime inventore consectetur assumenda architecto minima
        libero dolores provident. Praesentium nihil, velit voluptatem omnis,
        saepe fugit nemo inventore ut enim accusamus, commodi qui eum eos! Ut
        beatae enim vel temporibus dolorem recusandae nihil quaerat obcaecati,
        iusto nemo accusamus eveniet voluptatibus vitae error sed quod dolorum
        fugit culpa qui sit consequatur. Animi, voluptatem voluptates. Dolores
        quae minima est. Consectetur minima ad ex quam unde eveniet sunt velit
        ipsa rerum cumque. Nemo vitae obcaecati magni reiciendis repudiandae,
        nisi illo neque esse tempore, fuga error iste laborum unde voluptate
        animi expedita natus debitis, ratione tempora eius. Soluta quos
        doloribus deleniti nisi iusto nobis labore perspiciatis? Debitis
        corrupti aperiam porro ullam suscipit fugiat, incidunt expedita,
        accusamus neque, culpa est adipisci dignissimos? Omnis est voluptatem
        veritatis magni ea quas eos obcaecati veniam quos facilis excepturi
        recusandae repellat in ipsa animi asperiores molestiae dolorum et
        similique, perspiciatis voluptates minima? Ipsum nam doloribus porro
        recusandae est dicta nihil sapiente eum ab veniam incidunt praesentium
        architecto, maxime facere obcaecati illum beatae quibusdam animi
        veritatis. Magnam itaque beatae iure suscipit molestiae, nemo nostrum
        magni minus, blanditiis sapiente commodi non minima ipsam esse
        laudantium voluptatem architecto voluptates saepe consequatur! Fugit
        velit saepe possimus aspernatur adipisci consectetur beatae, minus, ab
        autem obcaecati amet repellat voluptatem nobis unde quae quaerat laborum
        aut soluta ea similique neque? Ut, assumenda quos. Maiores, soluta
        vitae? Porro ipsum fugiat excepturi dolore pariatur? Saepe esse
        distinctio necessitatibus quasi eaque iste mollitia ea aliquam sequi
        eveniet atque cupiditate velit, quidem vero, at iure, repellat eum
        perferendis minima amet sit obcaecati dolores. Nisi nemo voluptatum
        aliquam praesentium provident cupiditate repellendus? Voluptatem dolore
        nam illum mollitia explicabo facere porro quam facilis et consequuntur
        architecto quisquam voluptas quis temporibus omnis aut, molestias, iste
        delectus! Iusto, harum. Dolorum eaque, corporis quos, nisi quibusdam
        iusto ea dolores, laboriosam voluptatibus quae officia ab error saepe
        neque aliquid magnam vel accusamus similique assumenda? Pariatur vel
        eius natus quia, aspernatur nemo minus. Ab perspiciatis placeat
        similique, suscipit autem natus animi possimus inventore, doloremque
        consequatur minima voluptas fuga libero asperiores quasi eveniet? Dicta
        ipsam est tempore quaerat similique aliquam adipisci veniam mollitia
        provident facere, modi obcaecati saepe error odio impedit non eligendi
        ipsum labore repellendus doloribus voluptas beatae, harum aspernatur
        officiis? Quis possimus omnis blanditiis perferendis velit dolorem,
        libero eveniet laudantium veniam cumque quo aliquam non nemo voluptatem
        minima fugit sint! Libero necessitatibus quae accusamus at quam ipsa
        officiis quia dolor voluptas delectus neque porro similique mollitia,
        adipisci culpa aliquid error cum molestias cupiditate totam! Asperiores
        tempore itaque, blanditiis earum iusto quae est? Hic eius amet nulla
        nostrum reprehenderit eos doloremque laboriosam commodi blanditiis non,
        iure vero, assumenda illo exercitationem sequi at voluptate facere?
        Quasi sed eaque hic odit fugit veniam minima illum. Accusantium iusto
      </p>
    </div>
  );
}

export default App;
