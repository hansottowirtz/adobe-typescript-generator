/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Sub path information (returned by entire path 
		 * dataClassProperty of path item class)
		 */
		class SubPathInfo extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * is this path closed?
			 * @type {boolean}
			 */
			public closed: boolean;
			/**
			 * all the sub path item's path points
			 * @type {any[]}
			 */
			public entireSubPath: any[];
			/**
			 * sub path operation on other sub paths
			 * @type {Adobe.Photoshop.ShapeOperation}
			 */
			public operation: Adobe.Photoshop.ShapeOperation;
		}
	}
}