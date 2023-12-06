import Menu from "../components/Menu";
import HomeCotainer from "../components/HomeCotainer";
import PropertyComprehensiveSimpleCon from "../components/PropertyComprehensiveSimpleCon";
import JoinExpenseShareTodayContainer from "../components/JoinExpenseShareTodayContainer";
import PlanSelectionContainer from "../components/PlanSelectionContainer";
import CardWithBenefitsForm from "../components/CardWithBenefitsForm";
import Footer from "../components/Footer";

const MushoFinancialTransparency = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start">
      <Menu />
      <HomeCotainer />
      <PropertyComprehensiveSimpleCon />
      <JoinExpenseShareTodayContainer />
      <PlanSelectionContainer />
      <CardWithBenefitsForm />
      <Footer />
    </div>
  );
};

export default MushoFinancialTransparency;
