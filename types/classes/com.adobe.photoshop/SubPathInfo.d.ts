/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Sub path information (returned by entire path 
		 * dataClassProperty of path item class)
		 */
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