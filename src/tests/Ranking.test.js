import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRouterAndRedux} from './helpers/renderWithRouterAndRedux'
import Ranking from '../pages/Ranking';
// import mockData from "./helpers/mockData";
import { act } from "react-dom/test-utils";

describe('Página de Ranking', () => {
  it('Verifica se o botão de redirecionamento para tela de Login esta presente na tela', () => {
    const { history } = renderWithRouterAndRedux(<Ranking />);
    const bttnLogin = screen.getByRole('button', {
      name: /login/i
    });
    expect(bttnLogin).toBeInTheDocument();
    //     act(() => {
    // userEvent.click(bttnLogin);
    // });
    // const { pathname } = history.location;
    // expect(pathname).toBe('/');
  })

  // it('Verifica a requisição da API', async () => {
  //   global.fetch = jest.fn(async () => ({
  //     json: async () => mockData,
  //   }));
  //   renderWithRouterAndRedux(<App/>);
  //   const API_URL = 'https://opentdb.com/api_token.php?command=request';
  //   const usernameInputEl = screen.getByRole('textbox', {name: /username/i});
  //   const emailInputEl = screen.getByRole('textbox', {name: 'email'});
  //   const playBtnEl = screen.getByRole('button', { name: /play/i })
  //   act(() => {
  //     userEvent.type(usernameInputEl, 'Nome');
  //     userEvent.type(emailInputEl, 'email@email.com');
  //     userEvent.click(playBtnEl);
  //   });
  //   expect(global.fetch).toBeCalledWith(API_URL);

  //   jest.restoreAllMocks();
  // })

  // it('Verifica se, ao clicar no botão de configurações, a rota é redirecionada', async () => {
  //   const { history } = renderWithRouterAndRedux(<App/>);
  //   const usernameInputEl = screen.getByRole('textbox', {name: /username/i});
  //   const emailInputEl = screen.getByRole('textbox', {name: 'email'});
  //   const settingsBtnEl = screen.getByRole('button', { name: /configurações/i })
  //   act(() => {
  //     userEvent.type(usernameInputEl, 'Nome');
  //     userEvent.type(emailInputEl, 'email@email.com');
  //     userEvent.click(settingsBtnEl);
  //   });
  //   const { pathname } = history.location;
  //   expect(pathname).toBe('/settings');
  // });

});
