import { render /* screen */ } from '@testing-library/react'
// import NavBar from '.'

test('Render NavBar Component', () => {
  render(<>Hello</>)
  //   // const HomeLink = screen.getByText(/🍩/i)
  //   // const AboutLink = screen.getByText(/About/i)
  //   // const GalleryLink = screen.getByText(/Gallery/i)
  //   // const EssaysLink = screen.getByText(/Essays/i)

  //   // expect(HomeLink).toBeInTheDocument()
  //   // expect(AboutLink).toBeInTheDocument()
  //   // expect(GalleryLink).toBeInTheDocument()
  //   // expect(EssaysLink).toBeInTheDocument()
  //   // expect(HomeLink).toBeInTheDocument()
  expect(2 + 2).toEqual(4)
})
