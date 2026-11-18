
const carreiras = [
    {
        nome: "Desenvolvedor de Software",
        area: "Tecnologia",
        interesse: "tecnologia",
        habilidades: ["logica", "criatividade"],
        atividades: "Criar sites, aplicativos e sistemas.",
        competencias: "Lógica, criatividade e resolução de problemas.",
        formacao: "Análise e Desenvolvimento de Sistemas ou Ciência da Computação.",
        mercado: "Empresas de tecnologia, bancos, indústrias e trabalho autônomo."
    },
    {
        nome: "Psicólogo",
        area: "Saúde",
        interesse: "saude",
        habilidades: ["empatia", "comunicacao"],
        atividades: "Acompanhar pessoas e auxiliar no bem-estar emocional.",
        competencias: "Empatia, escuta e comunicação.",
        formacao: "Graduação em Psicologia e registro profissional.",
        mercado: "Clínicas, hospitais, escolas e empresas."
    },
    {
        nome: "Professor",
        area: "Educação",
        interesse: "educacao",
        habilidades: ["comunicacao", "organizacao"],
        atividades: "Ensinar, orientar e desenvolver atividades educativas.",
        competencias: "Comunicação, paciência e organização.",
        formacao: "Licenciatura na área escolhida.",
        mercado: "Escolas, universidades e instituições de ensino."
    },
    {
        nome: "Designer Gráfico",
        area: "Criatividade",
        interesse: "criatividade",
        habilidades: ["criatividade", "organizacao"],
        atividades: "Criar artes, logotipos e identidades visuais.",
        competencias: "Criatividade, comunicação e ferramentas digitais.",
        formacao: "Design Gráfico ou cursos de especialização.",
        mercado: "Agências, empresas e trabalho freelancer."
    },
    {
        nome: "Administrador",
        area: "Negócios",
        interesse: "negocios",
        habilidades: ["organizacao", "logica"],
        atividades: "Planejar projetos, organizar equipes e administrar recursos.",
        competencias: "Liderança, organização e planejamento.",
        formacao: "Graduação em Administração.",
        mercado: "Empresas privadas, órgãos públicos e empreendedorismo."
    },
    {
        nome: "Enfermeiro",
        area: "Saúde",
        interesse: "saude",
        habilidades: ["empatia", "organizacao"],
        atividades: "Prestar assistência aos pacientes e acompanhar tratamentos.",
        competencias: "Empatia, responsabilidade e atenção.",
        formacao: "Graduação em Enfermagem e registro profissional.",
        mercado: "Hospitais, clínicas, unidades de saúde e atendimento domiciliar."
    }
];

document.getElementById("careerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const interesse = document.getElementById("interesse").value;
    const habilidade = document.getElementById("habilidade").value;
    const trabalho = document.getElementById("trabalho").value;
    const objetivo = document.getElementById("objetivo").value;

    const recomendacoes = carreiras.map(carreira => {
        let pontos = 0;

        if (carreira.interesse === interesse) pontos += 3;
        if (carreira.habilidades.includes(habilidade)) pontos += 2;

        if (trabalho === "equipe" || trabalho === "ambos") pontos += 1;
        if (objetivo === "ajudar" && ["Saúde", "Educação"].includes(carreira.area)) pontos += 2;
        if (objetivo === "inovacao" && carreira.area === "Tecnologia") pontos += 2;
        if (objetivo === "liberdade" && carreira.area === "Criatividade") pontos += 2;
        if (objetivo === "estabilidade") pontos += 1;

        return {...carreira, pontos};
    });

    recomendacoes.sort((a, b) => b.pontos - a.pontos);

    const melhores = recomendacoes.slice(0, 3);

    let html = `
        <h2>🎉 Resultado do seu perfil!</h2>
        <p>Com base nas suas respostas, estas profissões podem combinar com você:</p>
    `;

    melhores.forEach((carreira, index) => {
        html += `
            <div class="profissao">
                <h3>${index + 1}. ${carreira.nome}</h3>
                <p><strong>Área de atuação:</strong> ${carreira.area}</p>
                <p><strong>Principais atividades:</strong> ${carreira.atividades}</p>
                <p><strong>Habilidades necessárias:</strong> ${carreira.competencias}</p>
                <p><strong>Formação recomendada:</strong> ${carreira.formacao}</p>
                <p><strong>Mercado de trabalho:</strong> ${carreira.mercado}</p>
            </div>
        `;
    });

    html += `
        <p style="margin-top:20px">
            💡 Lembre-se: estas são sugestões baseadas nas suas respostas.
            Pesquise sobre as profissões e descubra qual combina mais com seus sonhos!
        </p>
        <button onclick="location.reload()">Refazer teste 🔄</button>
    `;

    document.getElementById("resultado").innerHTML = html;
});
