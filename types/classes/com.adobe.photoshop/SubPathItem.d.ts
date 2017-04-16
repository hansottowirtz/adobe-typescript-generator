/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** An artwork sub path item */
		class SubPathItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** is this path closed? */
			public readonly closed: boolean;
			/** sub path operation on other sub paths */
			public readonly operation: Adobe.Photoshop.ShapeOperation;
			public readonly pathPoints: Adobe.Photoshop.PathPoints;
		}
	}
}