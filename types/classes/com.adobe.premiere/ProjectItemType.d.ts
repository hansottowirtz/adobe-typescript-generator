/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class ProjectItemType extends Adobe.Csawlib.CSHostObject {
			public readonly BIN: number;
			public readonly CLIP: number;
			public readonly FILE: number;
			public readonly ROOT: number;
		}
	}
}