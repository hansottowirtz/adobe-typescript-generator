/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PathPoint extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The position (coordinates) of the anchor point. */
			public readonly anchor: any[];
			/** The type of point. */
			public readonly kind: Adobe.Photoshop.PointKind;
			/**
			 * The location of the left direction point (the "in" 
			 * position).
			 */
			public readonly leftDirection: any[];
			/**
			 * The location of the right direction point (the "out" 
			 * position).
			 */
			public readonly rightDirection: any[];
		}
	}
}