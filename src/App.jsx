import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    estadoCivil: '',
    genero: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => {
      let newData = { ...prev, [name]: value }
      return newData
    })
  }

  const calculaProgresso = () => {
    let progresso = 0
    let incremento = (100 / Object.keys(formData).length);

    if (formData.nomeCompleto) {
      let nomeSplit = formData.nomeCompleto.split(' ')
      if (nomeSplit[1]) {
        progresso += incremento
      }
    }
    if (formData.email) {
      let padrao = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (padrao.test(formData.email)) {
        progresso += incremento
      }
    }
    if (formData.estadoCivil) {
      progresso += incremento
    }
    if (formData.genero) {
      progresso += incremento
    }
    return progresso
  }

  const handleSubmit = () => {
    setFormData({
      nomeCompleto: '',
      email: '',
      estadoCivil: '',
      genero: ''
    })
    alert("Cadastro efetuado com sucesso!")
  }

  return (
    <div className='App'>
      <h1>Formulário</h1>
      <main>
        <span>Progresso do formulário</span>
        <div className="bar-container">
          <div className="bar" style={{ width: `${calculaProgresso()}%` }} />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Nome Completo</label>
          <input name="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor=''>E-mail</label>
          <input name={"email"} value={formData.email} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select name="estadoCivil" value={formData.estadoCivil} onChange={handleChange}>
            <option value=''>- selecione...</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Gênero</label>
          <div className='radios-container' name="genero" value={formData.genero} onChange={handleChange}>
            <span>
              <input type='radio' name="genero" value="masculino" checked={formData.genero === 'masculino'} /> Masculino
            </span>
            <span>
              <input type='radio' name="genero" value="feminino" checked={formData.genero === 'feminino'} /> Feminino
            </span>
          </div>
        </div>
        <button disabled={(calculaProgresso() < 100)} onClick={handleSubmit}>Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;