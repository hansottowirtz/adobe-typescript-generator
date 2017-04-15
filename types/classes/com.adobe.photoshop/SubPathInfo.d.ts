/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SubPathInfo extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** is this path closed? */
			public closed: boolean;
			/** all the sub path item's path points */
			public entireSubPath: any[];
			/** sub path operation on other sub paths */
			public operation: Adobe.Photoshop.ShapeOperation;
		}
	}
}