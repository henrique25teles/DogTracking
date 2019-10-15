import React from 'react'
import { SettingsState } from 'interfaces/SettingsInterface';

const store = {
    state: {
      language: {
          id: 'pt-BR',
          name: 'Português Brasileiro'
      },
      languages: [
        {id: 'pt-BR', name: 'Português Brasileiro'},
        {id: 'en-US', name: 'English US'},
      ],
    }
  };

export default React.createContext<SettingsState>(null)