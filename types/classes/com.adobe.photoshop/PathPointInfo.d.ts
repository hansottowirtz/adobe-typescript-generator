/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PathPointInfo extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** the position of the anchor (in coordinates) */
			public anchor: any[];
			/** the point type, smooth/corner */
			public kind: Adobe.Photoshop.PointKind;
			/** location of the left direction point (in position) */
			public leftDirection: any[];
			/** location of the right direction point (out position) */
			public rightDirection: any[];
		}
	}
}