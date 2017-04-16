/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A point on a path */
		class PathPoint extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** the position (coordinates) of the anchor point */
			public readonly anchor: any[];
			/** the type of point: smooth/corner */
			public readonly kind: Adobe.Photoshop.PointKind;
			/** location of the left direction point (in position) */
			public readonly leftDirection: any[];
			/** location of the right direction point (out position) */
			public readonly rightDirection: any[];
		}
	}
}