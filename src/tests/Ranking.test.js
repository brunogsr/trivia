import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRouterAndRedux} from './helpers/renderWithRouterAndRedux'
import Ranking from '../pages/Ranking';
import { act } from "react-dom/test-utils";

describe('Página de Ranking', () => {
  it('Verifica se o botão de redirecionamento para tela de Login esta presente na tela', () => {
    const { history } = renderWithRouterAndRedux(<Ranking/>);
    const bttnLogin = screen.getByRole('button', { name: /login/i });
    expect(bttnLogin).toBeInTheDocument();
    act(() => {
      userEvent.click(bttnLogin);
    });
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  })
});
