/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Information about an array of path point info objects. You 
		 * do not use the path point object to create points that make 
		 * up a path. Rather, you use the path point object to retrieve 
		 * information about the points that describe path segments. To 
		 * create path points, use the path point info object.
		 */
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