/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class LayerComp extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** If true, uses layer appearance (layer styles) settings. */
			public appearance: boolean;
			/** The description of the layer comp. */
			public comment: any;
			/** The name of the layer comp. */
			public name: string;
			/** If true, uses layer position. */
			public position: boolean;
			/** If true, the layer comp is currently selected. */
			public readonly selected: boolean;
			/** If true, the layer comp is visible. */
			public visibility: boolean;
			/** Applies the layer comp to the document. */
			public apply(): void;
			/** Recaptures the current layer state(s) for this layer comp. */
			public recapture(): void;
			/** delete the object */
			public remove(): void;
			/** Resets the layer comp state to the document state. */
			public resetFromComp(): void;
		}
	}
}