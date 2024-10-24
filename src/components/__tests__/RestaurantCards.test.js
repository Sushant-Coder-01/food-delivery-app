import {render, screen} from "@testing-library/react"
import ResturantCard, { withPromotedLabel} from "../ResturantCards"
import { resturantCartData } from "../mocks/resCardMock"
import "@testing-library/jest-dom"


it("should render restaurantCard component with props data", () => {
    render(<ResturantCard resData = {resturantCartData} />)

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
})

it("should render withPromotedLabel HOF with resturantCartData", () => {
    const PromotedCard = withPromotedLabel(ResturantCard);
    
    render(<PromotedCard resData={resturantCartData}/>)

    const label = screen.getByText("OPEN");

    expect(label).toBeInTheDocument();
})