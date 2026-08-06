export class GumballMachine {
  public static SOLD_OUT = 0;
  public static NO_QUARTER = 1;
  public static HAS_QUARTER = 2;
  public static SOLD = 3;

  private state = GumballMachine.SOLD_OUT;
  private count = 0;

  constructor(count: number) {
    this.count = count;
    if (this.count > 0) {
      this.state = GumballMachine.NO_QUARTER;
    }
  }

  public insertQuarter() {
    if (this.state === GumballMachine.SOLD_OUT) {
      console.log("You can't insert a quarter, the machine is sold out");
    } else if (this.state === GumballMachine.HAS_QUARTER) {
      console.log("You can't insert another quarter");
    } else if (this.state === GumballMachine.SOLD) {
      console.log("Please wait we already giving you a gumball");
    } else if (this.state === GumballMachine.NO_QUARTER) {
      this.state = GumballMachine.HAS_QUARTER;
      console.log("You inserted a quarter");
    }
  }

  public ejectQuarter() {
    if (this.state === GumballMachine.SOLD_OUT) {
      console.log("You can't eject, you haven't inserted a quarter yet");
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log("You haven't inserted a quarter");
    } else if (this.state === GumballMachine.SOLD) {
      console.log("Sorry, you already turned the crank");
    } else if (this.state === GumballMachine.HAS_QUARTER) {
      console.log("Quarter returned");
      this.state = GumballMachine.NO_QUARTER;
    }
  }

  public turnCrank() {
    if (this.state === GumballMachine.NO_QUARTER) {
      console.log("You can't turn the crank when there is no quarter");
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log("You can't turn the crank when machine is sold out");
    } else if (this.state === GumballMachine.SOLD) {
      console.log("Please wait the machine is giving a gumball soon");
    } else if (this.state === GumballMachine.HAS_QUARTER) {
      this.state = GumballMachine.SOLD;
      console.log("You turn the handle");
    }
  }

  public dispense() {
    if (this.state === GumballMachine.SOLD) {
      console.log("A gumball comes rolling out of slot");
      this.count = this.count - 1;
      if (this.count === 0) {
        this.state = GumballMachine.SOLD_OUT;
        console.log("Oops out of gumballs");
      } else {
        this.state = GumballMachine.NO_QUARTER;
      }
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log("You need to pay first");
    } else if (this.state === GumballMachine.HAS_QUARTER) {
      console.log("No gumball dispensed");
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log("No gumball dispensed");

    }
  }

}
