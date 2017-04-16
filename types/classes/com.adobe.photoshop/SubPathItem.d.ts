/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** An artwork sub path item */
		class SubPathItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * is this path closed?
			 * @type {boolean}
			 * @readonly
			 */
			public readonly closed: boolean;
			/**
			 * sub path operation on other sub paths
			 * @type {Adobe.Photoshop.ShapeOperation}
			 * @readonly
			 */
			public readonly operation: Adobe.Photoshop.ShapeOperation;
			/**
			 * @type {Adobe.Photoshop.PathPoints}
			 * @readonly
			 */
			public readonly pathPoints: Adobe.Photoshop.PathPoints;
		}
	}
}