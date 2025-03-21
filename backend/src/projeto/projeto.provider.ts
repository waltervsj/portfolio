import { Projeto } from '@core'
import { Injectable } from '@nestjs/common'
import { PrismaProvider } from 'src/db/prisma.provider'

@Injectable()
export class ProjetoProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodos(): Promise<Projeto[]> {
		return (await this.prisma.projeto.findMany()) as Projeto[]
	}

	async obterPorID(id: number): Promise<Projeto | null> {
		return (await this.prisma.projeto.findUnique({
			where: { id },
			include: { tecnologias: true },
		})) as Projeto
	}
}
