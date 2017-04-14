/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class InkInfo extends IllustratorHostObject {
			/** the ink's screen angle (in degrees) */
			public angle: number;
			/** the color of the custom ink */
			public customColor: Color;
			/** the neutral density ( minimum 0.0 ) */
			public density: number;
			/** the dot shape name */
			public dotShape: string;
			/** the ink's frequency ( minimum 0.0 ) */
			public frequency: number;
			/** the ink type */
			public kind: InkType;
			/** the ink printing status */
			public printingStatus: InkPrintStatus;
			/** the trapping type */
			public trapping: TrappingType;
			/** the order of trapping for the ink ( minimum 1 ) */
			public trappingOrder: number;
		}
	}
}