function showContent(cConteudo) {
    switch (cConteudo) {
      case "home":
        document.getElementById("home").className = "";
        document.getElementById("clientes").className = "hidden";
        document.getElementById("orcamentos").className = "hidden";

        document.getElementById("lihome").className = "";
        document.getElementById("liclientes").className = "hidden-mob";
        document.getElementById("liorcamentos").className = "hidden-mob";
        break;

      case "clientes":
        document.getElementById("home").className = "hidden";
        document.getElementById("clientes").className = "";
        document.getElementById("orcamentos").className = "hidden";

        document.getElementById("lihome").className = "hidden-mob";
        document.getElementById("liclientes").className = "";
        document.getElementById("liorcamentos").className = "hidden-mob";
        break;

      case "orcamentos":
        document.getElementById("home").className = "hidden";
        document.getElementById("clientes").className = "hidden";
        document.getElementById("orcamentos").className = "";

        document.getElementById("lihome").className = "hidden-mob";
        document.getElementById("liclientes").className = "hidden-mob";
        document.getElementById("liorcamentos").className = "";
        break;

      default:
        break;
    }
}

const showMenu = () => {
    let url = document.URL;
    let home = document.getElementById('lihome');
    let cliente = document.getElementById("liclientes");
    let orcamento = document.getElementById("liorcamentos");

    if (url.endsWith('clientes')) {
        home.className === "hidden-mob"
          ? (home.className = "")
          : (home.className = "hidden-mob");
        cliente.className = "";
        orcamento.className === "hidden-mob"
          ? (orcamento.className = "")
          : (orcamento.className = "hidden-mob");

    } else if (url.endsWith('orcamentos')) {
        home.className === "hidden-mob"
          ? (home.className = "")
          : (home.className = "hidden-mob");
        cliente.className === "hidden-mob"
          ? (cliente.className = "")
          : (cliente.className = "hidden-mob");
        orcamento.className = "";

    } else {
        home.className = '';
        cliente.className === "hidden-mob"
          ? (cliente.className = "")
          : (cliente.className = "hidden-mob");
        orcamento.className === "hidden-mob"
          ? (orcamento.className = "")
          : (orcamento.className = "hidden-mob");
    }


}