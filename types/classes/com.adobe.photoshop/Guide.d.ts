/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Guide extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** location of the guide from origin of image */
			public coordinate: string;
			/** indicates whether the guide is vertical or horizontal */
			public direction: Adobe.Photoshop.Direction;
			/** delete the object */
			public remove(): void;
		}
	}
}