import {HeaderComponent} from "./header.component";
import {TestBed} from "@angular/core/testing";

let hdrObj;
beforeEach(()=>{
  TestBed.configureTestingModule({
    declarations: [HeaderComponent]
  });
  let fixture = TestBed.createComponent(HeaderComponent);
  hdrObj = fixture.debugElement.componentInstance;

})

describe("Header Component Unit test", ()=>{
  it("Verify instance of header component", () =>{
      expect(hdrObj).toBeTruthy();
      expect(hdrObj.cmpHeading).toEqual('My shopping cart app');

  });

});
