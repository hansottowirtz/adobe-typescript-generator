/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ShapeOperation extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly SHAPEADD: Adobe.Photoshop.ShapeOperation;
			public static readonly SHAPEINTERSECT: Adobe.Photoshop.ShapeOperation;
			public static readonly SHAPESUBTRACT: Adobe.Photoshop.ShapeOperation;
			public static readonly SHAPEXOR: Adobe.Photoshop.ShapeOperation;
			/** Constructor */
			public constructor();
		}
	}
}