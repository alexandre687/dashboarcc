
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const RegisterPage: React.FC = () => {
  const [userType, setUserType] = useState<'family' | 'caregiver'>('family');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Cadastre-se</CardTitle>
              <CardDescription className="text-center">
                Crie sua conta no CuidadosConecta
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="family" onValueChange={(value) => setUserType(value as 'family' | 'caregiver')}>
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="family">Família</TabsTrigger>
                  <TabsTrigger value="caregiver">Cuidador</TabsTrigger>
                </TabsList>
                
                <TabsContent value="family">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">Nome</Label>
                          <Input id="first-name" placeholder="João" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Sobrenome</Label>
                          <Input id="last-name" placeholder="Silva" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu.email@exemplo.com"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirme a senha</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm">
                          Eu aceito os{" "}
                          <Link to="/termos" className="text-primary hover:underline">
                            termos e condições
                          </Link>
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Criar conta
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="caregiver">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="c-first-name">Nome</Label>
                          <Input id="c-first-name" placeholder="Maria" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="c-last-name">Sobrenome</Label>
                          <Input id="c-last-name" placeholder="Oliveira" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="c-email">Email</Label>
                        <Input
                          id="c-email"
                          type="email"
                          placeholder="seu.email@exemplo.com"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="c-phone">Telefone</Label>
                        <Input
                          id="c-phone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="c-password">Senha</Label>
                        <Input
                          id="c-password"
                          type="password"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="c-confirm-password">Confirme a senha</Label>
                        <Input
                          id="c-confirm-password"
                          type="password"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="c-terms" required />
                        <Label htmlFor="c-terms" className="text-sm">
                          Eu aceito os{" "}
                          <Link to="/termos" className="text-primary hover:underline">
                            termos e condições
                          </Link>
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Cadastrar como cuidador
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="mt-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">ou cadastre-se com</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Button variant="outline">
                    <img 
                      src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" 
                      alt="Google" 
                      className="h-4 w-4 mr-2"
                    />
                    Google
                  </Button>
                  <Button variant="outline">
                    <img 
                      src="https://cdn.cdnlogo.com/logos/f/84/facebook-icon-2019.svg" 
                      alt="Facebook" 
                      className="h-4 w-4 mr-2"
                    />
                    Facebook
                  </Button>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-center">
              <div className="text-sm text-gray-600">
                Já tem uma conta?{" "}
                <Link to="/entrar" className="text-primary font-medium hover:underline">
                  Entrar
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
