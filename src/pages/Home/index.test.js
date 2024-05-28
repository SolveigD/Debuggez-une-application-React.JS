import { fireEvent, render, screen } from "@testing-library/react";
import Page from "./index";


describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Page />);
    
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Page />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
    
      render(<Page setIsOpened />);
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
   render(<Page />);
   const element = document.querySelector('.EventCard');
   expect(element).toBeInTheDocument();
  })
  it("a list a people is displayed", () => {
   render (<Page />);
   const element = document.querySelector('.PeopleCard');
   expect(element).toBeInTheDocument();
  })
  it("a footer is displayed", () => {
    render (<Page />);
    const element = document.querySelector('footer');
    expect(element).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", async () => {
    render (<Page />);
    await screen.findByText('boom');
  })
});

