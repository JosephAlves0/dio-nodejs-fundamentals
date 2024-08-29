function calcularDano(ataque, defesa) {
    //TODO: Implemente a função calcularDano
    dano = ataque - defesa;

    if (dano < 0) {
        dano = 0;
    }

    return dano;
  }
  
  const ataque = 10.5;
  const defesa = 5.4;
  
  const danoCausado = calcularDano(ataque, defesa);
  console.log("O dano causado pelo ataque foi: " + danoCausado);