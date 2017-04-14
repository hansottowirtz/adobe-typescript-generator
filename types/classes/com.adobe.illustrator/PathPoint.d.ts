/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PathPoint extends IllustratorHostObject {
			/** The position (coordinates) of the anchor point. */
			public anchor: any[];
			/** Location of the left direction point (in position) */
			public leftDirection: any[];
			/** The type of point: smooth/corner. */
			public pointType: PointType;
			/** Location of the right direction point (out position) */
			public rightDirection: any[];
			/** The path point selected state. */
			public selected: PathPointSelection;
			/** delete the object */
			public remove(): void;
		}
	}
}